import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
import '@testing-library/jest-dom'
describe("Pruebas en el componente addCategory", () => {
    
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("debe mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("no debe de postear la informacion unsubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto',()=>{
    //simular el inputChange
    //simular el submit
    //setcategories debe de haberllamado
    //el valor del input debe ser ''
    const value = 'Hola mundo';
    wrapper.find("input").simulate("change", { target:{value}});
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');

  });
});
