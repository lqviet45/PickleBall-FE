import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface News {
  title: string;
  imgUrl: string;
  url: string;
}
@Component({
  selector: 'lib-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  newsList: News[] = [
    {
      title: 'Lorem Ipsum',
      imgUrl: 'https://fastly.4sqi.net/img/general/600x600/81862289_hnvlaR6ZKTHuOcYe8YG0ZxuCyW3Xisf8Amyu6cU2D1A.jpg',

      url: ''
    },
    {
      title: 'Dolor Sit Amet',
      imgUrl: 'https://th.bing.com/th/id/R.9819efbcb512599112cd1a86df65576d?rik=2qJxGMX3NREjFg&riu=http%3a%2f%2fpickleballvietnam.net%2fwp-content%2fuploads%2f2023%2f07%2fdanh-pickleball.jpg&ehk=aGG5iuYgA8slc1nQMdJ5PGFjsmQ96iEevs14YlqMJzg%3d&risl=&pid=ImgRaw&r=0',
      url: ''
    },
    {
      title: 'Consectetur Adipiscing Elit',
      imgUrl: 'https://th.bing.com/th/id/R.9819efbcb512599112cd1a86df65576d?rik=2qJxGMX3NREjFg&riu=http%3a%2f%2fpickleballvietnam.net%2fwp-content%2fuploads%2f2023%2f07%2fdanh-pickleball.jpg&ehk=aGG5iuYgA8slc1nQMdJ5PGFjsmQ96iEevs14YlqMJzg%3d&risl=&pid=ImgRaw&r=0',
      url: ''
    },
    {
      title: 'Sed Do Eiusmod Tempor',
      imgUrl: 'https://th.bing.com/th/id/R.9819efbcb512599112cd1a86df65576d?rik=2qJxGMX3NREjFg&riu=http%3a%2f%2fpickleballvietnam.net%2fwp-content%2fuploads%2f2023%2f07%2fdanh-pickleball.jpg&ehk=aGG5iuYgA8slc1nQMdJ5PGFjsmQ96iEevs14YlqMJzg%3d&risl=&pid=ImgRaw&r=0',
      url: ''
    },
    {
      title: 'Incididunt Ut Labore Et',
      imgUrl: 'https://th.bing.com/th/id/R.9819efbcb512599112cd1a86df65576d?rik=2qJxGMX3NREjFg&riu=http%3a%2f%2fpickleballvietnam.net%2fwp-content%2fuploads%2f2023%2f07%2fdanh-pickleball.jpg&ehk=aGG5iuYgA8slc1nQMdJ5PGFjsmQ96iEevs14YlqMJzg%3d&risl=&pid=ImgRaw&r=0',
      url: ''
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch news data from an API
    this.http.get<any>('YOUR_NEWS_API_ENDPOINT').subscribe(response => {
      // Extract top 5 news articles from the response
      this.newsList = response.articles.slice(0, 5).map((article: any) => ({
        title: article.title,
        imgUrl: article.description,
        url: article.url
      }));
    });
  }

}
