import {MainServer} from '../client';

/**
 * Get Agenda
 */
export const GetAgenda = (mentorId) =>
    MainServer.request('GET', `mentors/${mentorId}/agenda`);
