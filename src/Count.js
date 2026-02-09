import './Count.css';
import React from "react";

class Count extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    state = 
    {
        binary:"",
        decimal:"",
        hexadecimal:"",
        binaryToDecimal:"",
        decimalToBinary:"",
        decimalToHexadecimal:"",
        hexadecimalToDecimal:"",
        binaryToHexadecimal:"",
        hexadecimalToBinary: ""

    }
    update = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({ 
            binary: name === 'binary' ? value : "",
            decimal: name === 'decimal' ? value : "",
            hexadecimal: name === 'hexadecimal' ? value : "",
        });
        
        this.resetResults();
    }

    resetResults = () => {
        this.setState({
            binaryToDecimal: "",
            decimalToBinary: "",
            decimalToHexadecimal: "",
            hexadecimalToDecimal: "",
            binaryToHexadecimal: "",
            hexadecimalToBinary: ""
        });
    }

    // 1. Десятичная в Двоичную
    decimalToBinary = (decimal) => {
        if (decimal === "" || isNaN(parseInt(decimal))) return "";
        return parseInt(decimal, 10).toString(2);
    }

    // 2. Двоичная в Десятичную
    binaryToDecimal = (binary) => {
        if (binary === "" || !/^[01]+$/.test(binary)) return "";
        return parseInt(binary, 2).toString(10);
    }

    // 3. Десятичная в Шестнадцатеричную
    decimalToHexadecimal = (decimal) => {
        if (decimal === "" || isNaN(parseInt(decimal))) return "";
        return parseInt(decimal, 10).toString(16).toUpperCase();
    }

    // 4. Шестнадцатеричная в Десятичную
    hexadecimalToDecimal = (hex) => {
        if (hex === "" || !/^[0-9a-fA-F]+$/.test(hex)) return "";
        return parseInt(hex, 16).toString(10);
    }
    
    // 5. Двоичная в Шестнадцатеричную (через десятичную или напрямую)
    binaryToHexadecimal = (binary) => {
        if (binary === "" || !/^[01]+$/.test(binary)) return "";
        // Сначала в десятичную, затем в шестнадцатеричную
        const decimalValue = parseInt(binary, 2);
        return decimalValue.toString(16).toUpperCase();
    }
    
    // 6. Шестнадцатеричная в Двоичную
    hexadecimalToBinary = (hex) => {
        if (hex === "" || !/^[0-9a-fA-F]+$/.test(hex)) return "";
        // Сначала в десятичную, затем в двоичную
        const decimalValue = parseInt(hex, 16);
        return decimalValue.toString(2);
    }

    count = () => {
        const { binary, decimal, hexadecimal } = this.state;

        this.setState(prevState => ({
            // Из Двоичной
            binaryToDecimal: this.binaryToDecimal(binary),
            binaryToHexadecimal: this.binaryToHexadecimal(binary),
            
            // Из Десятичной
            decimalToBinary: this.decimalToBinary(decimal),
            decimalToHexadecimal: this.decimalToHexadecimal(decimal),
            
            // Из Шестнадцатеричной
            hexadecimalToDecimal: this.hexadecimalToDecimal(hexadecimal),
            hexadecimalToBinary: this.hexadecimalToBinary(hexadecimal)
        }));
    }

    render()
    {
        const {
            binary, 
            decimal, 
            hexadecimal,
            binaryToDecimal,
            decimalToBinary,
            decimalToHexadecimal,
            hexadecimalToDecimal,
            binaryToHexadecimal,
            hexadecimalToBinary
        } = this.state;
        return(
            <div className="converter-container">
                <h2>Конвертер систем счисления</h2>
                <form>
                    <div>
                        <label>Двоичная:</label>
                        <input 
                            type="text" // Changed to text for easier binary/hex input validation
                            value={binary} 
                            name="binary" 
                            placeholder="Enter binary (0s and 1s)" 
                            onChange={this.update}
                        />
                    </div>
                    <div>
                        <label>Десятичная:</label>
                        <input 
                            type="number" 
                            value={decimal} 
                            name="decimal" 
                            placeholder="Enter decimal" 
                            onChange={this.update}
                        />
                    </div>
                    <div>
                        <label>Шестнадцатеричная:</label>
                        <input 
                            type="text" // Changed to text for easier hex input
                            value={hexadecimal} 
                            name="hexadecimal" 
                            placeholder="Enter hexadecimal (0-9, A-F)" 
                            onChange={this.update}
                        />
                    </div>
                </form>
                
                <div className="button-container">
                    <input type="button" value={"Пересчитать все"} onClick={this.count}/>
                </div>
                
                <h3>Результаты:</h3>
                <div className="results">
                    {/* Переводы из двоичной */}
                    <p>
                        Двоичная ({binary || '---'}) → Десятичная: <strong>{binaryToDecimal || '...'}</strong>
                    </p>
                    <p>
                        Двоичная ({binary || '---'}) → Шестнадцатеричная: <strong>{binaryToHexadecimal || '...'}</strong>
                    </p>
                    
                    {/* Переводы из десятичной */}
                    <p>
                        Десятичная ({decimal || '---'}) → Двоичная: <strong>{decimalToBinary || '...'}</strong>
                    </p>
                    <p>
                        Десятичная ({decimal || '---'}) → Шестнадцатеричная: <strong>{decimalToHexadecimal || '...'}</strong>
                    </p>
                    
                    {/* Переводы из шестнадцатеричной */}
                    <p>
                        Шестнадцатеричная ({hexadecimal || '---'}) → Десятичная: <strong>{hexadecimalToDecimal || '...'}</strong>
                    </p>
                    <p>
                        Шестнадцатеричная ({hexadecimal || '---'}) → Двоичная: <strong>{hexadecimalToBinary || '...'}</strong>
                    </p>
                </div>
            </div>
        )
    }
}
export default Count;