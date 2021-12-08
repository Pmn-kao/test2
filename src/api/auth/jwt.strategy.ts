import { ExtractJwt, Strategy, VerifiedCallback } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { jwtConstants } from "./constants";
import { UserService } from "../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any, done: VerifiedCallback): Promise<any> {
    const user = await this.userService.findPayload(payload);
    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    return done(
      null,
      {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
      },
      payload.iat
    );
  }
}
