import request from 'superagent';
import { apiHost } from 'config';
import APIError from './APIError';

interface EnquiryData {
  company_head_count: string;
  company_name: string;
  contact_phone_number: string;
  contact_email: string;
  contact_name: string;
}

// eslint-disable-next-line import/prefer-default-export
export async function sendEnquiry(data: EnquiryData): Promise<void> {
  try {
    await request.post(`${apiHost}/enquiry`).send(data);
  } catch (error) {
    throw new APIError('Server Error', error.status);
  }
}
