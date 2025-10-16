import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { SheetsService } from './sheets.service';

@Controller('sheets')
export class SheetsController {
  constructor(private readonly sheetsService: SheetsService) {}

  @Get(':spreadsheetId')
  async getSheetData(
    @Param('spreadsheetId') spreadsheetId: string,
    @Query('range') range: string,
  ) {
    return this.sheetsService.getSheetData(spreadsheetId, range);
  }

  @Post(':spreadsheetId/update')
  async updateSheetData(
    @Param('spreadsheetId') spreadsheetId: string,
    @Body() body: { range: string; values: any[][] },
  ) {
    return this.sheetsService.updateSheetData(
      spreadsheetId,
      body.range,
      body.values,
    );
  }

  @Post(':spreadsheetId/append')
  async appendSheetData(
    @Param('spreadsheetId') spreadsheetId: string,
    @Body() body: { range: string; values: any[][] },
  ) {
    return this.sheetsService.appendSheetData(
      spreadsheetId,
      body.range,
      body.values,
    );
  }
}
