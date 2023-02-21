import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>( // hago una interface con json to code
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    data.results.forEach(({ name, url }) => {
      // destructuramos lo que nos llega de la peticion
      const segments = url.split('/'); // separamos por el / y vamos a obtener la parte solo de numero
      const no = +segments[segments.length - 2]; // el + para hacerlo numero

      console.log(name, no);
    });
    return data.results;
  }
}
