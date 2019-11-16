import {Toast} from './toast';

export class FormValidator {
    form: HTMLFormElement | null;
    submitBtn: HTMLButtonElement | null;
    nameInput: HTMLInputElement | null;
    emailInput: HTMLInputElement | null;
    messageTextarea: HTMLTextAreaElement | null;
    formSelector: string;

    constructor(formSelector: string) {
        this.formSelector = formSelector;
        this.form = document.querySelector(`.${this.formSelector}`);
        this.submitBtn = document.querySelector(`.${this.formSelector}__submit-button`);
        this.nameInput = document.querySelector(`.${this.formSelector}__group--name input`);
        this.emailInput = document.querySelector(`.${this.formSelector}__group--email input`);
        this.messageTextarea = document.querySelector(`.${this.formSelector}__textarea`);
        this.addNameInputBlurListener();
        this.addEmailInputBlurListener();
        this.addTextareaBlurListener();
        this.addSubmitBtnClickListener();
    }

    isEmailValid(): boolean {
        return this.isEmailValue() ? this.isEmailFormatMatched() : false;
    }

    isEmailValue(): boolean {
        return !!this.emailInput && this.emailInput.value.trim().length > 0;
    }

    isNameValue(): boolean {
        return !!this.nameInput && this.nameInput.value.trim().length > 0;
    }

    isMessageValue(): boolean {
        return !!this.messageTextarea && this.messageTextarea.value.trim().length > 0;
    }

    isEmailFormatMatched(): boolean {
        const re: RegExp = /\S+@\S+\.\S+/;
        return re.test(this.emailInput.value);
    }

    isFormValid(): boolean {
        return this.isMessageValue() && this.isNameValue() && this.isEmailValid();
    }

    addNameInputBlurListener(): void {
        this.nameInput.addEventListener('blur', () => {
            const errorSpan = this.createOrGetErrorSpan('name', 'Name is required');
            this.isNameValue() ? this.deleteErrorMessageSpan(errorSpan) : this.nameInput.parentElement.insertBefore(errorSpan, this.nameInput);
            this.toggleSubmitButtonActivation();
        });
    }

    addEmailInputBlurListener(): void {
        this.emailInput.addEventListener('blur', () => {
            const errorSpan = this.createOrGetErrorSpan('email', 'Email is wrong formatted');
            this.isEmailValid() ? this.deleteErrorMessageSpan(errorSpan) : this.emailInput.parentElement.insertBefore(errorSpan, this.emailInput);
            this.toggleSubmitButtonActivation();
        });
    }

    addTextareaBlurListener(): void {
        this.messageTextarea.addEventListener('blur', () => {
            const errorSpan = this.createOrGetErrorSpan('message', 'Message is required');
            this.isMessageValue() ? this.deleteErrorMessageSpan(errorSpan) : this.messageTextarea.parentElement.insertBefore(errorSpan, this.messageTextarea);
            this.toggleSubmitButtonActivation();
        });
    }

    addSubmitBtnClickListener(): void {
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const nameErrorSpan = this.createOrGetErrorSpan('name', 'Name is required');
            const emailErrorSpan = this.createOrGetErrorSpan('email', 'Email is wrong formatted');
            const messageErrorSpan = this.createOrGetErrorSpan('message', 'Message is required');
            this.isNameValue() ? this.deleteErrorMessageSpan(nameErrorSpan) : this.nameInput.parentElement.insertBefore(nameErrorSpan, this.nameInput);
            this.isEmailValid() ? this.deleteErrorMessageSpan(emailErrorSpan) : this.emailInput.parentElement.insertBefore(emailErrorSpan, this.emailInput);
            this.isMessageValue() ? this.deleteErrorMessageSpan(messageErrorSpan) : this.messageTextarea.parentElement.insertBefore(messageErrorSpan, this.messageTextarea);
            this.toggleSubmitButtonActivation();
            if (this.isFormValid()) {
                new Toast('Message was successfully sent', 'success', 'Success');
                this.form.reset();
            } else {
                new Toast('Message was not sent. Form is invalid', 'error', 'Error');
            }
        });
    }

    createErrorMessage(errorText: string, type: string): HTMLSpanElement {
        const errorSpan: HTMLSpanElement = document.createElement('span');
        errorSpan.innerText = errorText;
        errorSpan.classList.add(`${this.formSelector}__error-message--${type}`);
        return errorSpan;
    }

    deleteErrorMessageSpan(errorSpan: HTMLSpanElement): void {
        errorSpan.remove();
    }

    isErrorSpan(type: string): boolean {
        return !!document.querySelector(`.${this.formSelector}__error-message--${type}`);
    }

    getErrorSpan(type: string): HTMLSpanElement {
        return document.querySelector(`.${this.formSelector}__error-message--${type}`);
    }

    toggleSubmitButtonActivation(): void {
        this.isFormValid() ? this.submitBtn.removeAttribute('disabled') : this.submitBtn.setAttribute('disabled', 'true');
    }

    createOrGetErrorSpan(type: string, errorText: string) {
        return this.isErrorSpan(type) ? this.getErrorSpan(type) : this.createErrorMessage(errorText, type);
    }

}
