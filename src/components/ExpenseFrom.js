import React from 'react';
import moment from 'moment';
import  { SingleDatePicker } from 'react-dates';

//CSS
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    //Default state of form
    state = {        
        isCalendarFocused: false,
        description: '',
        note: '',
        amount: '',
        createdAt: moment()
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => {
            return {
                description: description
            };
        });
    };

    onNoteChange = (e) => {
        const note = e.target.value;

        this.setState(() => {
            return {
                note: note
            };
        });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/))
        {
            this.setState(() => ({amount}));        
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => {
            return {
                createdAt: createdAt
            }
        });
    };

    onDateFocusChange = (e) => {
        this.setState(() => {
            return {
                isCalendarFocused: e.focused
            }
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                     type="text"
                     placeholder="Description"
                     autoFocus
                     value={this.state.description}
                     onChange={this.onDescriptionChange}
                    />
                    <input 
                     type="text"
                     placeholder="Amount"
                     value={this.state.amount}
                     onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                     date={this.state.createdAt}
                     onDateChange={this.onDateChange} // PropTypes.func.isRequired
                     focused={this.state.isCalendarFocused} // PropTypes.bool
                     onFocusChange={this.onDateFocusChange} // PropTypes.func.isRequired
                    />
                    <textarea
                     placeholder="Add your notes (Optional)"
                     value={this.state.note}
                     onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}