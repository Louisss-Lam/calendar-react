import React, {useState} from 'react';
import Button from './Button';

export default function SetPomodoro() {
    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.2,
        long: 1,
        active: 'work'
    })

    const handleChange = input => {
        const { name, value } = input.target;
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;

            default:
                break;
        }
    }

    const handleSumbit = e => {
        e.preventDefault();
        // updateExecute(newTimer);
    };
  return (
    <div>
        <form noValidate> 
            <div>
                <input name="work" onChange={handleChange} value={newTimer.work} />
                <input name="shortBreak" onChange={handleChange} value={newTimer.short} />
                <input name="longBreak" onChange={handleChange} value={newTimer.long} />
            </div>
            <Button title="Set Timer" _callback={handleSumbit} />
        </form>
    </div>
  )
}
