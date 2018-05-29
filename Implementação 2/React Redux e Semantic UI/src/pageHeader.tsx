import * as React from 'react'
import { Container, Header, Menu, Icon, Label } from 'semantic-ui-react'

const st = {
    backgroundColor: '#007bff'
}

class PageHeader extends React.Component<any, any> {
    render() {
        return (
            <Menu fixed='top' style={st} inverted borderless>
                <Container>
                    <Menu.Item header>
                        <Label size='big' style={{backgroundColor: 'transparent'}}>
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
