import express from 'express';
import {createTicket, getAllTickets, getTicketById, updateTicket, deleteTicket} from '../controllers/ticketController.js';

const ticketRoutes = express.Router();

ticketRoutes.route('/').post(createTicket).get(getAllTickets);
ticketRoutes.route('/:ticketId').get(getTicketById).put(updateTicket).delete(deleteTicket);


export default ticketRoutes;