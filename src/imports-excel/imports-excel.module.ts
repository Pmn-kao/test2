import { Module, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Albums } from "src/entity/albums.entity";
import { UploadController } from "./imports-excel.controller";
// import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middleware";
// import { FileUploadMiddleware } from "../middleware/upload.middleware";


@Module({
  imports: [TypeOrmModule.forFeature([Albums])],
  controllers: [UploadController],
  // components: [],
})
export class UploadModule {
//   configure(consumer: MiddlewaresConsumer) {
//     consumer.apply([FileUploadMiddleware]).forRoutes({
//       method: RequestMethod.POST,
//       path: "/upload",
//     });
//   }
 }
