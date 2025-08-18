import { render, screen } from "@testing-library/react";
import { PortfolioApp } from "../src/PortfolioApp";

describe('Pruebas en <PortfolioApp />', () => {

    const title = 'Holaaa, me llamo Gastón Camú';

    // test('Debe de hacer match con el snapshot', () => {

    //     const {container} = render(<PortfolioApp title={title} />)
    //     expect(container).toMatchSnapshot();

    // });

    test('Debe mostrar el titulo en un h1', () => {
        render(<PortfolioApp title={title} />)
        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain( title );

    });

    test('Debe existir el titulo', () => {

        render(<PortfolioApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy();
    });

});


