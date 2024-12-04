import { Publisher, Subjects, DisasterUpdatedEvent } from '@chmat/common';

export class DisasterUpdatedPublisher extends Publisher<DisasterUpdatedEvent> {
  readonly subject = Subjects.DisasterUpdated;
}
