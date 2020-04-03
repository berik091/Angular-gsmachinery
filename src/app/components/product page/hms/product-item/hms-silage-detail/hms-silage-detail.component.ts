import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';
import { Item4, HmsHorizontalService } from 'src/app/services/Hms/hms-horizontal.service';

declare var $: any;
@Component({
  selector: 'app-hms-silage-detail',
  templateUrl: './hms-silage-detail.component.html',
  styleUrls: ['./hms-silage-detail.component.scss']
})
export class HmsSilageDetailComponent implements OnInit {

  @Input() item4: Item4;

  constructor(
    private route: ActivatedRoute,
    private hmsSilageService: HmsHorizontalService,
    private router: Router ) {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      this.item4 = this.hmsSilageService.getById(+params.id);
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
