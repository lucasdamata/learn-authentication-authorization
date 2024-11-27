import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          { id: '1', name: 'Zezinho' },
          { id: '2', name: 'Fulano' },
          { id: '3', name: 'Beltrano' },
        ]
      }
    }
  }

}
