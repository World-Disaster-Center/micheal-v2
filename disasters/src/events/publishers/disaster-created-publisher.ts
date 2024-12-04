import { Publisher, Subjects, DisasterCreatedEvent } from '@chmat/common';

export class DisasterCreatedPublisher extends Publisher<DisasterCreatedEvent> {
  readonly subject = Subjects.DisasterCreated;
}
