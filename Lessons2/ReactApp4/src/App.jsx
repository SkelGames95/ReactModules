import { ListOfObjects } from "./ListOfObjects"
import { MyList } from "./MyList"
import { Form } from "./RefsExample"

export const App = () => {

    return (
        <div>
            <h1>My Form</h1>
            <Form />
            <br/>
            <br/>
            <MyList items={['Jake', 'John', 'Jack', 'James']}/>
            <br/>
            <br/>
            <ListOfObjects objects={[
                { id: 1, user: 'George', age: 43},
                { id: 2, user: 'Mary', age: 39},
                { id: 3, user: 'Georgie', age: 17},
                { id: 4, user: 'Sheldon', age: 11},
                { id: 5, user: 'Missy', age: 11},
            ]}/>
        </div>
    )
}