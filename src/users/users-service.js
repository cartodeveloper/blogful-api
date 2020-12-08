const UsersService = {
  getAllUsers(knex) {
    return knex.select("*").from("blogful_users");
  },
  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into("blog_ful_users")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from("blogful_users").select("*").where("id", id).first();
  },
  deleteUser(knex, id) {
    return knex("blogful_users").where({ id }).update(newUserFields);
  },
};

module.exports = UsersService;
