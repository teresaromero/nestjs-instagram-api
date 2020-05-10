import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Get('/:mediaId')
  getMediaById(
    @Param('mediaId', ParseIntPipe) mediaId: number,
  ): Promise<AxiosResponse> {
    return this.mediaService.getMediaById(mediaId);
  }

  @Get('/:mediaId/children')
  getChildrenOfMediaById(
    @Param('mediaId', ParseIntPipe) mediaId: number,
  ): Promise<AxiosResponse> {
    return this.mediaService.getChildrenOfMediaById(mediaId);
  }
}
