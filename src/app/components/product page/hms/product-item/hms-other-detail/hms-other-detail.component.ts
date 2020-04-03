import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';
import { HmsProductsService, Item5 } from 'src/app/services/Hms/hms-products.service';

declare var $: any;
@Component({
  selector: 'app-hms-other-detail',
  templateUrl: './hms-other-detail.component.html',
  styleUrls: ['./hms-other-detail.component.scss']
})
export class HmsOtherDetailComponent implements OnInit {

  @Input() item5: Item5;

  constructor(
    private route: ActivatedRoute,
    private hmsOtherservice: HmsProductsService,
    private router: Router ) {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      this.item5 = this.hmsOtherservice.getById(+params.id);
  });
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      $('.thumb a').click(function(e) {
          e.preventDefault();
          $('.imgBox img').attr('src', $(this).attr( 'href'));
      });
  });

    this.router.events.subscribe((evt) => {
    if (!(evt instanceof NavigationEnd)) {
        return;
    }
    window.scrollTo(0, 0);

});
  // Аккордион
    $(document).ready( function() {
    $('.set > a').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this)
          .siblings('.content')
          .slideUp(200);
        $('.set > a i')
          .removeClass('fa-minus')
          .addClass('fa-plus');
      } else {
        $('.set > a i')
          .removeClass('fa-minus')
          .addClass('fa-plus');
        $(this)
          .find('i')
          .removeClass('fa-plus')
          .addClass('fa-minus');
        $('.set > a').removeClass('active');
        $(this).addClass('active');
        $('.content').slideUp(200);
        $(this)
          .siblings('.content')
          .slideDown(200);
      }
    });
    $('.accordion-container .set a:eq(0)').trigger('click');
  });
  // Аккордион//
  }
}
