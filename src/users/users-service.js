const UsersService = {
  getAllUsers(knex) {
    return knex.select("*").from("blogful_users");
  },
  insertUser(knex, newUser) {
    return knex.insert(newUser).into("blog_ful_users");
  },
};
