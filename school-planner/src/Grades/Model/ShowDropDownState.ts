export class ShowDropDownState {
    id: number;
    show: boolean;

    constructor(initializer?: any) {
        this.id = initializer?.id;
        this.show = initializer?.show;
    }
}