import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Repository } from './repository';
import { type ILogin, type IUser } from './entities';
import serverConfig from '../../config';

class Service {
    private readonly secretKey = serverConfig.jwtSecret;

    generateToken(loginData: ILogin): string {
        const token: string = jwt.sign(loginData, serverConfig.jwtSecret, {
            expiresIn: '30m',
        });
        return token;
    }

    async login(loginData: ILogin): Promise<any> {
        const { email, password } = loginData;
        const filter: { email: string } = { email };
        const user: any = await Repository.findByField(filter);

        if (user) {
            const result = await bcrypt.compare(password, user[0].password);
            return result;
        }
        return false;
    }

    async register(regData: IUser): Promise<any> {
        return await Repository.register(regData);
    }
}
export default new Service();
