import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  constructor() {
    this.view = false
  }
  view: boolean;

  toggle() {
    this.view = !this.view
  }
  data: any = [
    { 'reviewID': '337083244', 'review': "The premises are very peaceful and well maintained. The apartment was spacious though basically equipped. We enjoyed the fine pool and good food. But the hospitality was overwhelming! These people are so friendly and helpful that you'd never want to leave again. After a small accident with a child that needed stitching in the hospital the brought us there and picked us up again and arranged some snacks during the waiting. Arriving back at the hotel after midnight we found the complete staff waiting to welcome us and then preparing dinner. Really a moment never to forget" },
    { 'reviewID': '337083244', 'review': "The premises are very peaceful and well maintained. The apartment was spacious though basically equipped. We enjoyed the fine pool and good food. But the hospitality was overwhelming! These people are so friendly and helpful that you'd never want to leave again. After a small accident with a child that needed stitching in the hospital the brought us there and picked us up again and arranged some snacks during the waiting. Arriving back at the hotel after midnight we found the complete staff waiting to welcome us and then preparing dinner. Really a moment never to forget" }
    ,
    { 'reviewID': '337083244', 'review': "The premises are very peaceful and well maintained. The apartment was spacious though basically equipped. We enjoyed the fine pool and good food. But the hospitality was overwhelming! These people are so friendly and helpful that you'd never want to leave again. After a small accident with a child that needed stitching in the hospital the brought us there and picked us up again and arranged some snacks during the waiting. Arriving back at the hotel after midnight we found the complete staff waiting to welcome us and then preparing dinner. Really a moment never to forget" }
    , { 'reviewID': '337083244', 'review': "The premises are very peaceful and well maintained. The apartment was spacious though basically equipped. We enjoyed the fine pool and good food. But the hospitality was overwhelming! These people are so friendly and helpful that you'd never want to leave again. After a small accident with a child that needed stitching in the hospital the brought us there and picked us up again and arranged some snacks during the waiting. Arriving back at the hotel after midnight we found the complete staff waiting to welcome us and then preparing dinner. Really a moment never to forget" }

    , { 'reviewID': '337083244', 'review': "The premises are very peaceful and well maintained. The apartment was spacious though basically equipped. We enjoyed the fine pool and good food. But the hospitality was overwhelming! These people are so friendly and helpful that you'd never want to leave again. After a small accident with a child that needed stitching in the hospital the brought us there and picked us up again and arranged some snacks during the waiting. Arriving back at the hotel after midnight we found the complete staff waiting to welcome us and then preparing dinner. Really a moment never to forget" }

    , { 'reviewID': '337083244', 'review': "The premises are very peaceful and well maintained. The apartment was spacious though basically equipped. We enjoyed the fine pool and good food. But the hospitality was overwhelming! These people are so friendly and helpful that you'd never want to leave again. After a small accident with a child that needed stitching in the hospital the brought us there and picked us up again and arranged some snacks during the waiting. Arriving back at the hotel after midnight we found the complete staff waiting to welcome us and then preparing dinner. Really a moment never to forget" }

  ]

  ngOnInit(): void {

  }

}
