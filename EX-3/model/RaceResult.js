import  Duration  from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The participant ID.
   * @param {string} sport - The sport type.
   * @param {Duration} time - The duration for this race.
   */
  constructor(participantId, sport, time) {
    this.participantId = participantId;
    this.sport = sport;
    this.time = time;
  }
}