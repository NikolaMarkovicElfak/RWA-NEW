import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { HighscoresService } from './highscores.service';
import { Highscore } from 'src/entities/highscore.entity';

@Controller('highscores')
export class HighscoresController {
    constructor (private highscoresService: HighscoresService) {}

    @Get()
    public getHighscore() {
        return this.highscoresService.getAll();
    }

    @Get(':id')
    public getHighscores(@Param('id', ParseIntPipe) id: number) {
        return this.highscoresService.getById(id);
    }
    
    @Post()
    public addHighscore(@Body() highscore: Highscore){
        return this.highscoresService.create(highscore);
    }
}
