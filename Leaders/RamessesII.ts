import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Egyptian from '../Egyptian';

export class RamessesII extends Leader {
  static civilization(): typeof Civilization {
    return Egyptian;
  }

  name(): string {
    return 'Ramesses II';
  }
}

export default RamessesII;
