import Egyptian from './Egyptian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Egyptian',
  nation: 'Egypt',
  colors: ['#CE1126', '#FFF'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Egyptian, name, value))
);
