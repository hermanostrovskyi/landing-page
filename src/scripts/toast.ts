export class Toast {
    message: string;
    type: string;
    header: string;


    constructor(message: string, type: string, header: string) {
        this.header = header;
        this.type = type;
        this.message = message;

        this.createToast(message, type, header);
    }

    createToast(message: string, type: string, header: string) {
        const toast: HTMLDivElement = document.createElement('div');
        const toastHeader: HTMLHeadingElement = document.createElement('h3');
        const toastMessage: HTMLParagraphElement = document.createElement('p');

        toast.classList.add('toast');
        toast.classList.add(`toast--${type}`);
        toastHeader.classList.add('toast__header');
        toastMessage.classList.add('toast__message');

        toastHeader.innerText = header;
        toastMessage.innerText = message;

        toast.append(toastHeader, toastMessage);
        document.body.append(toast);
        this.killToast(toast);
    }

    killToast(toast: HTMLDivElement): void {
        setTimeout(() => {
            toast.remove();
        }, 2500)
    }
}
