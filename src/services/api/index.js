import {MainServer} from '../client';

/**
 * Get Agenda
 * @param mentorId
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export const GetAgenda = (mentorId) =>
    MainServer.request(
        'GET',
        `mentors/${mentorId}/agenda`,
    );

/**
 * Add new agenda
 * @param mentorId
 * @param data of new agenda
 * @returns {Promise<AxiosResponse<any>>}
 */
export const addNewAgenda = (mentorId, data) =>
    MainServer.request(
        'POST',
        `mentors/${mentorId}/agenda`,
        null,
        data,
    );