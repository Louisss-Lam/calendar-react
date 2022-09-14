import React from 'react';
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';
import Timer from './PromodoroTimer/Timer';

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
      <Timer />
    </aside>
  )
}
