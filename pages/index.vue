<script>
  import Alias from '~/pages/blog';

  Alias.head = function() {
    return {
      link: [
        { hid: 'canonical', rel: 'canonical', href: '/blog' }
      ]
    }
  };

	export default Alias;
</script>
