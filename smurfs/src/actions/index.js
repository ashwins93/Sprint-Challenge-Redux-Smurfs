/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import { createActions } from 'redux-actions';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const {
  fetchSmurfsRequest,
  fetchSmurfsSuccess,
  fetchSmurfsFailure,
  addSmurfRequest,
  addSmurfSuccess,
  addSmurfFailure,
  deleteSmurfRequest,
  deleteSmurfSuccess,
  deleteSmurfFailure,
} = createActions(
  'FETCH_SMURFS_REQUEST',
  'FETCH_SMURFS_SUCCESS',
  'FETCH_SMURFS_FAILURE',
  'ADD_SMURF_REQUEST',
  'ADD_SMURF_SUCCESS',
  'ADD_SMURF_FAILURE',
  'DELETE_SMURF_REQUEST',
  'DELETE_SMURF_SUCCESS',
  'DELETE_SMURF_FAILURE',
);
