import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import path from 'path'

const options: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/thiago.db',
    logging: true,
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')]
    
};

module.exports = options;