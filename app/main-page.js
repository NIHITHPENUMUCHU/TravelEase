import { MainViewModel } from './main-view-model';
export function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MainViewModel();
}
