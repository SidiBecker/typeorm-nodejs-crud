import User from '../model/User';

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};
