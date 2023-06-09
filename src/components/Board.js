import React from 'react';
import Square from './Square';

class Board extends React.Component{     
    renderSquare(i){
        return (
        <Square 
            value={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
        />
        )
    }

    render(){
        return (
            <div className='ml-3 mt-3'>
                <div className='flex grid-cols-3 text-xl'>
                    <div>
                        <div>{this.renderSquare(0)}</div>
                        <div>{this.renderSquare(3)}</div>
                        <div>{this.renderSquare(6)}</div>
                    </div>
                    <div>
                        <div>{this.renderSquare(1)}</div>
                        <div>{this.renderSquare(4)}</div>
                        <div>{this.renderSquare(7)}</div>
                    </div>
                    <div>
                        <div>{this.renderSquare(2)}</div>
                        <div>{this.renderSquare(5)}</div>
                        <div>{this.renderSquare(8)}</div>
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Board;

export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }