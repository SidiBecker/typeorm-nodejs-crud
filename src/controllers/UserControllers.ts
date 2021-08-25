import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../model/User';
import UserView from '../views/users_view';
import * as Yup from 'yup';

export default {
  async list(req: Request, res: Response) {
    const UsersRepository = getRepository(User);

    const users = await UsersRepository.find();

    console.log(users);

    return res.json(UserView.renderMany(users));
  },

  async show(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const { id } = req.params;

    const user = await usersRepository.findOne(id);

    if (user == null) {
      return res.status(404).json({ messsage: 'Not Found' });
    }

    return res.json(UserView.render(user));
  },

  async create(req: Request, res: Response) {
    const { name } = req.body;

    const usersRepository = getRepository(User);

    const data = {
      name,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return res.status(201).send(user);
  },

  async update(req: Request, res: Response) {
    const { id, name } = req.body;

    const usersRepository = getRepository(User);

    const data = {
      id,
      name,
    };

    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = await usersRepository.save(data);

    return res.status(201).send(user);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.body;

    const usersRepository = getRepository(User);

    const data = {
      id,
    };

    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = await usersRepository.delete(data);

    return res.status(201).send(user);
  },
};
