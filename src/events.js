import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

export default [
  (
    <Feed.Event key="event0">
      <Feed.Label>
        <img src='/images/avatar/small/elliot.jpg' alt="" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like'/>
            4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ),
  (
    <Feed.Event key="event1">
      <Feed.Label image='/images/avatar/small/helen.jpg'/>
      <Feed.Content>
        <Feed.Summary>
          <a href="/">Helen Troy</a> added <a href="/">2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href="/">
            <img src='/images/wireframe/image.png' alt="" />
          </a>
          <a href="/">
            <img src='/images/wireframe/image.png' alt="" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like'/>
            1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ),
  (
    <Feed.Event key="event2">
      <Feed.Label image='/images/avatar/small/jenny.jpg'/>
      <Feed.Content>
        <Feed.Summary date='2 Days Ago' user='Jenny Hess' content=' add you as a friend'/>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like'/>
            8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ),
  (
    <Feed.Event key="event3">
      <Feed.Label image='/images/avatar/small/joe.jpg'/>
      <Feed.Content>
        <Feed.Summary>
          <a href="/"> Joe Henderson </a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where we'd we started,
          then starting all over again. Even if we don't run extra laps that day, we surely will
          come back for more of the same another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like'/> 5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ),
  (
    <Feed.Event key="event4">
      <Feed.Label image='/images/avatar/small/justen.jpg'/>
      <Feed.Content>
        <Feed.Summary>
          <a href="/">Justen Kitsune</a> added <a href="/">2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href="/">
            <img src='/images/wireframe/image.png' alt="" />
          </a>
          <a href="/">
            <img src='/images/wireframe/image.png' alt="" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like'/>
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ),
];
