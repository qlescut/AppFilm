import { Sequelize } from 'sequelize';

export default new Sequelize('appfilm', 'root', '', {dialect : 'mysql', host : 'localhost'});