(function () {
  'use strict';

  const screen = document.getElementById('screen');
  const keys = document.querySelector('.keys');

  const state = {
    display: '0',
    firstOperand: null,
    operator: null,
    waitingForSecond: false,
    justEvaluated: false,
  };

  function updateDisplay(value = state.display) {
    screen.textContent = value;
  }

  function inputDigit(d) {
    if (state.waitingForSecond || state.justEvaluated) {
      state.display = d;
      state.waitingForSecond = false;
      state.justEvaluated = false;
    } else {
      state.display = state.display === '0' ? d : state.display + d;
    }
    updateDisplay();
  }

  function inputDecimal() {
    if (state.waitingForSecond || state.justEvaluated) {
      state.display = '0.';
      state.waitingForSecond = false;
      state.justEvaluated = false;
    } else if (!state.display.includes('.')) {
      state.display += '.';
    }
    updateDisplay();
  }

  function clearAll() {
    state.display = '0';
    state.firstOperand = null;
    state.operator = null;
    state.waitingForSecond = false;
    state.justEvaluated = false;
    updateDisplay();
  }

  function clearEntry() {
    state.display = '0';
    state.waitingForSecond = false;
    updateDisplay();
  }

  function backspace() {
    if (state.justEvaluated) {
      // If last action was equals, treat backspace as clear entry
      clearEntry();
      state.justEvaluated = false;
      return;
    }
    if (state.waitingForSecond) return; // nothing to delete on a fresh second operand
    state.display = state.display.length > 1 ? state.display.slice(0, -1) : '0';
    updateDisplay();
  }

  function toggleSign() {
    if (state.display === '0') return;
    if (state.display.startsWith('-')) {
      state.display = state.display.slice(1);
    } else {
      state.display = '-' + state.display;
    }
    updateDisplay();
  }

  function compute(a, op, b) {
    const x = Number(a);
    const y = Number(b);
    if (!isFinite(x) || !isFinite(y)) return NaN;
    switch (op) {
      case '+': return x + y;
      case '-': return x - y;
      case '*': return x * y;
      case '/': return y === 0 ? Infinity : x / y;
      default: return y; // no-op
    }
  }

  function handleOperator(nextOp) {
    const inputValue = state.display;

    if (state.operator && state.waitingForSecond) {
      // changing operator before entering second operand
      state.operator = nextOp;
      return;
    }

    if (state.firstOperand == null) {
      state.firstOperand = Number(inputValue);
    } else if (state.operator) {
      const result = compute(state.firstOperand, state.operator, inputValue);
      if (!isFinite(result)) {
        screen.textContent = 'Error';
        // reset
        state.display = '0';
        state.firstOperand = null;
        state.operator = null;
        state.waitingForSecond = false;
        state.justEvaluated = false;
        return;
      }
      state.firstOperand = result;
      state.display = String(result);
      updateDisplay();
    }

    state.waitingForSecond = true;
    state.operator = nextOp;
    state.justEvaluated = false;
  }

  function handleEquals() {
    if (state.operator == null || state.waitingForSecond) {
      // nothing to evaluate
      state.justEvaluated = true;
      return;
    }
    const result = compute(state.firstOperand, state.operator, state.display);
    if (!isFinite(result)) {
      screen.textContent = 'Error';
      // reset
      state.display = '0';
      state.firstOperand = null;
      state.operator = null;
      state.waitingForSecond = false;
      state.justEvaluated = false;
      return;
    }
    state.display = String(result);
    state.firstOperand = result;
    state.operator = null;
    state.waitingForSecond = false;
    state.justEvaluated = true;
    updateDisplay();
  }

  keys.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const action = btn.dataset.action;

    switch (action) {
      case 'digit':
        inputDigit(btn.dataset.digit);
        break;
      case 'decimal':
        inputDecimal();
        break;
      case 'operator':
        handleOperator(btn.dataset.operator);
        break;
      case 'equals':
        handleEquals();
        break;
      case 'all-clear':
        clearAll();
        break;
      case 'clear-entry':
        clearEntry();
        break;
      case 'backspace':
        backspace();
        break;
      case 'sign':
        toggleSign();
        break;
    }
  });

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    const { key } = e;

    if (/^[0-9]$/.test(key)) {
      inputDigit(key);
      return;
    }
    if (key === '.') { inputDecimal(); return; }

    if (key === '+' || key === '-' || key === '*' || key === '/') {
      handleOperator(key);
      return;
    }

    if (key === 'Enter' || key === '=') { e.preventDefault(); handleEquals(); return; }

    if (key === 'Escape') { clearAll(); return; }

    if (key === 'Backspace') { backspace(); return; }
  });

  // initial draw
  updateDisplay('0');
})();
