/*
 * Nagthana_load.c
 *
 * Created: 20/02/2015 7:54:24 PM
 *  Author: User
 */ 


#include <avr/io.h>
#include <mega8.h>
int main(void)
{
	Init_Adc();
	Init_LCD(LS_NONE);
	LCDClear();
	init_usart(51);
	unsigned int a,b=512,d,e,u,v,w,x,y,z,i=0;
	float c;
	DDRB=0b11111111;
	sbi(PORTB,1);
	_delay_ms(4000);
	while(1)
	{
		a=read_adc(2);
		if (a > 512)
		{
			a=read_adc(2);
		}
		else
		{
			e=512-a;
			c=e/37.88;
			d=c*1000;
			u=d/1000;
			v=d%1000;
			w=v/100;
			x=v%100;
			y=x/10;
			z=x%10;
			LCDWriteStringXY(0,0,"AC =  .");
			LCDWriteIntXY(5,0,u,1);
			LCDWriteIntXY(7,0,w,1);
			LCDWriteIntXY(8,0,y,1);
			LCDWriteIntXY(9,0,z,1);
			_delay_ms(500);
		}
		
		if (d >= 700)
		{
			cbi(PORTB,1);
			LCDWriteStringXY(0,0,"   Over  Load   ");
			if (i == 0)
			{
				transmit_String("AT\r");
				_delay_ms(1000);
				_delay_ms(1000);
				_delay_ms(1000);
				LCDWriteStringXY(0,1,"  MSG SENDING   ");
				transmit_String("AT+CMGF=1\r");
				_delay_ms(1000);
				_delay_ms(1000);
				_delay_ms(1000);
				
				transmit_String("AT+CMGS=\"+919922392082\"\r");
				_delay_ms(1000);
				_delay_ms(1000);
				
				transmit_String("Supply is turn off due to over load");
				_delay_ms(1000);
				_delay_ms(1000);
				_delay_ms(1000);
				
				transmit_char(0x1A);
				_delay_ms(3000);
				LCDWriteStringXY(0,1,"MSG Sent        ");
				_delay_ms(3000);
				LCDClear();
				i=1;
			}
		}
		else
		{
			sbi(PORTB,1);
			_delay_ms(500);
		}
	}		
}