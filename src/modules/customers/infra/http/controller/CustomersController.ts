import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCustomerSerivce = container.resolve(CreateCustomerService);
    const { email, name } = request.body;

    const customer = await createCustomerSerivce.execute({
      email,
      name,
    });

    return response.json(customer);
  }
}
