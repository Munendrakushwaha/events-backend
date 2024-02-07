import { type Response, type Request, type NextFunction } from 'express';
import { type Profile, SuperfaceClient } from '@superfaceai/one-sdk';

class OtherMiddleware {
    static sdk = new SuperfaceClient();

    static addCustomHeader = (
        req: Request,
        res: Response,
        next: NextFunction,
    ): void => {
        res.setHeader('customHeader', 'X-myCustomHeader');
        next();
    };

    static run = async (ip: string): Promise<any> => {
        try {
            const profile: Profile = await OtherMiddleware.sdk.getProfile(
                'address/ip-geolocation@1.0.1',
            );
            const result: any = await profile.getUseCase('IpGeolocation').perform(
                {
                    ipAddress: ip,
                },
                {
                    provider: 'ipdata',
                    security: {
                        apikey: {
                            apikey:
                '9a511b6fc8334e1852cfbbd4ff3f1af3c42ed6abc75e96a1648b969a',
                        },
                    },
                },
            );

            const data: any = result.unwrap();
            return data;
        } catch (error) {
            // eslint-disable-nextline no-console
            console.error(error);
            throw error;
        }
    };

    static geoLocation = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<any> => {
    //   const ip = "45.249.87.217";
    //   const ip = "42.108.5.67";
        const ip: string = '45.249.87.217';
        try {
            const response: any = await this.run(ip);
            if (response.addressRegion !== 'Delhi') {
                res.status(403).send('User is not from the expected region');
            }
            console.log('user from expected region');
            next();
        } catch (error) {
            console.log(error);
        }
    };

    static Logger = (req: Request, res: Response, next: NextFunction): void => {
        console.log(
            `Method is ${req.method}, Urls is ${
                req.originalUrl
            } and TimeStamp is: ${new Date().toLocaleString()}`,
        );
        next();
    };
}

export default OtherMiddleware;
