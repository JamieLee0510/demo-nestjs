/**
 * 添加用戶控制器以處理登錄請求：
 */
import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<string> {
    const user = this.userService.findOne(loginDto.username);
    if (user && user.password === loginDto.password) {
      return 'Login successful';
    }
    return 'Invalid credentials';
  }
}
