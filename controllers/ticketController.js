import Ticket from '../models/Ticket.js';

const createTicket = async (req, res) => {

    try {
        const newTicket = await Ticket.create(req.body);
        res.json(newTicket);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating ticket', 
            error,
        });
    }
};

const getAllTickets = async (req, res) => {
    const tickets = await Ticket.find({
        isDeleted: false
    });
    res.json(tickets);
};

const getTicketById = async (req, res) => {
    const ticket = await Ticket.findById(req.params.ticketId);
    res.json(ticket);
};

const updateTicket = async (req, res) => {
    const { ticketId } = req.params;
    const updatedTicket = await Ticket.updateOne(
        {
          _id: ticketId,
        }, 
        req.body
    );
    res.json(updatedTicket);
    };

    const deleteTicket = async (req, res) => {
        
        const deletedTicket = await Ticket.findByIdAndUpdate(
            
            req.params.ticketId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedTicket);
    }
    

export { createTicket, getAllTickets, getTicketById, updateTicket, deleteTicket };