import * as React from 'react'
import { Container, Menu, Icon, Label, Dropdown } from 'semantic-ui-react'

const menuStyle = { backgroundColor: '#007bff' }
const labelStyle = { backgroundColor: 'transparent' }


class PageHeader extends React.Component {
    render() {
        return (
            <Menu fixed='top' style={menuStyle} inverted borderless>
                <Container>
                    <Menu.Item header>
                        <Label size='huge' style={labelStyle}>
                            <Icon name='shopping basket'></Icon>
                            Mostrar lojas
                        </Label>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}
export default PageHeader
