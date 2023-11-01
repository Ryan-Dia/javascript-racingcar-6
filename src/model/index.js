import { SYSTEM } from '../constants/System.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

class RacingModel {
  #vehicle;

  constructor(vehicle) {
    this.#vehicle = vehicle;
  }

  // 오직 내부에서만 사용하고 private 메서드이기 때문에 static을 사용하지 않음
  // eslint-disable-next-line class-methods-use-this
  #canMove() {
    const randomNumber = RandomNumberGenerator.run();
    return randomNumber >= SYSTEM.canMoveNumber;
  }
}

export default RacingModel;
