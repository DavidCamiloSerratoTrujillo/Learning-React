

import enzyme from 'enzyme';//Se usa para los snapshots
import  Adapter from '@wojtekmaj/enzyme-adapter-react-17';//Tambien es la version beta para el react 17
import {createSerializer} from 'enzyme-to-json';//Se usa para que el snapshot generado se muestre en un formato normal

enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));