import { DestinationDetailViewModel } from '../view-models/destination-detail-view-model';
export function onNavigatingTo(args) {
    const page = args.object;
    const destination = args.context;
    page.bindingContext = new DestinationDetailViewModel(destination);
}
