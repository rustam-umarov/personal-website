import React from "react";
import imagePath from "../assets/images/me.png";
import Paragraph from "../widgets/Paragraph";
import ImageContainer from "../widgets/ImageContainer";
import Header from "../widgets/Header";

export default function About(props) {
  return (
    <>
      <Header
        text='Something about me'
        dark={props.dark}
        bold
        fontSize='70px'
      />
      <ImageContainer path={imagePath} width='250px' height='250px' />
      <Paragraph
        dark={props.dark}
        text='For over hundreds of decades humanity was striving to go beyond
        imagination, explore the space and, luckily, Yuri Gagarin was the first
        ever man who successfully made it to the orbit of the planet Earth.
        However, this small paragraph is not about him and space. Probably could
        have been more interesting to read about space, worm holes and time
        travel, but I want to take some of your time to talk about my ordinary
        self.'
      />
      <Paragraph
        dark={props.dark}
        text='Since you somehow ended up over here and, I hope, wondering who
        this handsome guy is (not Yuri Gagarin, but the guy on the photo above)
        - my name is Rustam and I am 27 years old(now when I stated my age, I
        will have to update my page every year, or… write some date time
        function to do that for me hmm… will think about it later, let me show
        off a bit first). Now I am thinking this is the most standard and boring
        introduction straight from the book of “Standard and Boring
        Introduction”s Chapter 1, Page 1 - “My name is X and I am N years old”.
        No. We do not do this kind of things here, therefore good morning! I
        believe you did not expect that, unless you ever talked to me in person.
        Shoot. That was a lot of off topic useless information and I should
        finally say something about myself! Well… I like coding, even when I do
        not have anything to do, I try to work on myself. Said “I” too many
        times - that’s bad. Anyway, problem solving is my passion and I consider
        .NET universe “SPOILER!” as Thor considered Asgard, before Thanos did
        all the bad things and ended up ruining lots of lives. Truly believe
        Asgard will make a come back in the form of somethings new like .NET
        Standard was replaced by .NET Core and, eventually, by .NET 5. Moreover,
        my second passion is making development process smooth and easy, setting
        up automated deployment and testing pipelines. Do I love docker and
        kubernetes? They are my favorite, like Cap’s shield or Thor’s hammer(a
        minute of humor: - why is Thor’s hammer so heavy and no one can lift it?
        - because it has all npm packages in it and Thor’s actual name is
        Node(this is the time when people usually laugh)). Glad this is one way
        interaction and you cannot tell me it is not funny.'
      />
      <Paragraph
        dark={props.dark}
        text='One more thing to point out, I like keeping everything in containers
        even Jenkins running in the container has a docker CLI in the same
        container to let it communicate with external docker client on host
        machine. Too many details, I guess. And if you are already having
        Ironman’s legendary facepalm, I will try to be super precise - I do full
        stack... ba dum tss... Yeah this web page is written in ReactJS, also trying
        to learn React Native by myself, not prioritizing it right now though, I
        don’t like styling and Cascading Style Sh***, makes me look like Hulk
        sometimes, let me solve a problem from LeetCode instead, please. 75%/25%
        - backend/frontend, 25 could be replaced with greater number, but we
        only have 100 in 100% and CSS is not my lover, so let it stay at 25%.
        Hey, I assume this is all I can tell you on the first date, will keep
        telling more as we get closer! Thanks for making it all the way till the
        end. Offended you are, a sh** I don’t give would have Yoda said, but I
        really do appreciate you spending your valuable time and reading this
        intro. If you feel like keeping in touch, let’s connect, my social media
        is down below. Take care!'
      />
      <Paragraph
        dark={props.dark}
        italic
        bold
        fontSize='12px'
        align='center'
        text='P.S. If you still feel like diving into Gagarin’s story, or if you skipped
      everything once I said “However”, the real story is <a href="https://en.wikipedia.org/wiki/Yuri_Gagarin">here.</a>'
      />
    </>
  );
}
